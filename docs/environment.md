# Environment and biome model

## Environment modes

### Normal gameplay (AFK)

Use this for long-term AFK rolling in normal gameplay.

The calculator automatically handles:

- native biome rarity
- natural biome availability
- biome-exclusive aura requirements
- special AFK factors for Glitched and Dreamspace

### Ignore biome effects

Uses base rarity only.

This is useful for checking raw aura rarity without any biome/time effects.

### Currently in a biome/time/location

Assumes that the selected environment is already active.

Examples:

- Currently in Snowy → Chillsear uses its Snowy native rarity
- Currently in Glitched → Fault uses its Glitched rarity directly
- The Limbo location → location-specific auras are treated as rollable there

## Special AFK factors

Some environments are handled by community true-rarity factors instead of simple uptime.

### Glitched

```text
AFK factor = 65,179
```

For Oppression:

```text
true rarity = 220,000,000 * 65,179
```

### Dreamspace

```text
AFK factor = 37,892
```

For Dreammetric:

```text
true rarity = 320,000,000 * 37,892
```

## Singularity

Singularity is modeled as a rare replacement of Starfall:

```text
Singularity start chance = 1% whenever Starfall starts
```

Catalyst behavior is not included.

