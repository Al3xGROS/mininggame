from random import uniform

def mine_block(p):
    return uniform(0, 1) > p

def theorical_result(q):
    return ((q**2)*(4 - q))/(1 + q + q**3)

def E(a, h, n, q, memo={}):
    if n == 0:
        return 0

    if (a, h, n) in memo:
        return memo[(a, h, n)]

    if a > h:
        # Case a > h: override, wait
        result = max((h + 1) - q + E(a - h - 1, 0, n - 1, q, memo),
                     q * E(a + 1, h, n - 1, q, memo) + (1 - q) * (E(a, h + 1, n - 1, q, memo) - q))
    else:
        # Case a <= h: abandon, flip coin
        result = max(E(0, 0, n - 1, q, memo),
                     q * E(a + 1, h, n - 1, q, memo) + (1 - q) * (E(a, h + 1, n - 1, q, memo) - q))

    memo[(a, h, n)] = result
    return result

def little_markov_chain(p, loops=50000):
    honest_blocks = 0
    attacker_blocks = 0

    state = 0

    for _ in range(loops):
        if state == 0:
            if mine_block(p):  # Attackers mine a block
                state = 1
            else:  # Honest miners mine a block
                honest_blocks += 1
        elif state == 1:
            if mine_block(p):  # Attackers mine another block
                state = 2
            else:  # Honest miners mine a block
                state = 3
        elif state == 3:
            if mine_block(p):  # Attackers mine a block
                state = 0
                attacker_blocks += 2
            else:  # Honest miners mine a block
                state = 0
                honest_blocks += 2
        elif state == 2:
            if mine_block(p):  # Attackers mine another block
                state = 0
                attacker_blocks += 3
            else:
                state = 0
                attacker_blocks += 2

    return honest_blocks, attacker_blocks

def big_markov_chain(p, g, loops=50000):
    attackers_chain_len = 0

    honest_blocks = 0
    attacker_blocks = 0

    state = 0

    for _ in range(loops):
        if state == 0:
            if mine_block(p):  # Attackers mine a block
                state = 1
                attackers_chain_len += 1
            else:  # Honest miners mine a block
                honest_blocks += 1
        elif state == -1:
            if mine_block(p):  # Attackers mine another block
                state = 0
                attacker_blocks += 2
                attackers_chain_len = 0
            else:  # Honest miners mine a block
                state = 0
                attackers_chain_len = 0
                if uniform(0, 1) > g:
                    honest_blocks += 2
                else:
                    honest_blocks += 1
                    attacker_blocks += 1
        elif state == 1:
            if mine_block(p):  # Attackers mine a block
                state = 2
                attackers_chain_len += 1
            else:  # Honest miners mine a block
                state = -1
        elif state == 2:
            if mine_block(p):  # Attackers mine another block
                state = 3
                attackers_chain_len += 1
            else:
                state = 0
                attacker_blocks += attackers_chain_len
                attackers_chain_len = 0
        else:
            if mine_block(p):  # Attackers mine another block
                state += 1
                attackers_chain_len += 1
            else:   # Honest mine a block
                state -= 1
    
    return honest_blocks, attacker_blocks

def simulation1():
    # Set the probabilities
    p = 0.586  # Probability for honest miners

    # Run the simulation
    honest_blocks, attacker_blocks = little_markov_chain(p)

    # Print the results
    print(f"Honest Miner Blocks: {honest_blocks}")
    print(f"Attacker Blocks: {attacker_blocks}")
    print(f"Attacker Winnings: {attacker_blocks/(attacker_blocks + honest_blocks)}")
    print(f"Attacker Chances: {(1 - p)}")
    print(f"Theorical Results: {theorical_result(1 - p)}")

def simulation2():
    # Set the probabilities
    p = 0.75  # Probability for honest miners
    g = 0.5 # Proportion of honest miners mining on the block of the attackers

    # Run the simulation
    honest_blocks, attacker_blocks = big_markov_chain(p, g)

    # Print the results
    print(f"Honest Miner Blocks: {honest_blocks}")
    print(f"Attacker Blocks: {attacker_blocks}")
    print(f"Attacker Winnings: {attacker_blocks/(attacker_blocks + honest_blocks)}")
    print(f"Attacker Chances: {(1 - p)}")
    print(f"Gamma : {(g)}")

def simulation3():
    result = E(0, 0, 200, 0.3294)
    print(f"INITIAL VALUES : [a = 0, h = 0, n = 200, q = 0.3294]")
    print(f"RESULT : {result}")

simulation3()