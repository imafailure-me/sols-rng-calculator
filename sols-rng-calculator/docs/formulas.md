# Formulas

## Basic chance

For most auras, the per-roll chance is approximated as:

```text
P = luck / rarity
```

Where:

- `luck` is the effective luck for that roll
- `rarity` is the aura denominator, for example `375,000,000`

## Average rolls

```text
average_rolls = 1 / P
```

## Average time

```text
average_time_seconds = average_rolls / rolls_per_second
```

Rollspeed is interpreted as:

```text
rolls_per_second = rollspeed / 100
```

For example:

```text
290 rollspeed = 2.9 rolls/sec
```

## Probability milestones

Chance of getting at least one copy after `n` rolls:

```text
chance = 1 - (1 - P)^n
```

Solving for `n`:

```text
n = ln(1 - chance) / ln(1 - P)
```

This is used for 10%, 25%, 50%, 75%, 90%, 95%, and 99% milestones.

## Rarer-aura blocking

When enabled, the calculator assumes rarer auras are checked before the target aura.

For a target aura:

```text
P_target = P(target) * product(1 - P(rarer_aura))
```

This models the idea that a rarer aura can take the roll before the lower-rarity target is awarded.

## Fixed-luck Cyberspace auras

Meta and Illusionary are treated as fixed-luck auras:

- player luck is ignored
- devices are ignored
- bonus rolls are ignored

The order is:

1. Illusionary
2. Meta
3. normal priority order

