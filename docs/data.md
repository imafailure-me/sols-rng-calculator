# Updating data

Most calculator data is currently stored in `src/app.js`.

Important sections:

- `raw` aura table
- `devicePresets`
- `biomeWeights`
- AFK factors:
  - Glitched: `65,179`
  - Dreamspace: `37,892`

## Updating an aura

Find the aura in the `raw` table:

```text
Aura Name|Tier|Base Rarity|Native Rarity|Native Biome|Kind
```

Example:

```text
Chillsear|Glorious|375000000|125000000|Snowy|standard
```

Fields:

1. Aura name
2. Tier
3. Base rarity
4. Native rarity, if any
5. Native biome/time/location, if any
6. Kind

## Kinds

Common values:

- `standard`
- `challenge`
- `challenge-unaffected`
- `unobtainable`

