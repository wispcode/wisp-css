# Customizing

## Overview

Wisp does not ship with a settings file. Instead, every default is a CSS custom property with a sensible fallback value built in. This means you can drop Wisp into a project and start immediately without configuring anything.

When you are ready to make it your own, override any property in your own stylesheet using the cascade the way it was always intended to be used. Wisp does not need to know about your changes.

```css
:root {
    --wisp-color-primary: #e63946;
    --wisp-spacing-md: 1.25rem;
}
```

## Custom Properties

### Spacing

| Property                | Default  |
|-------------------------|----------|
| `--wisp-spacing-xs`     | 0.25rem  |
| `--wisp-spacing-sm`     | 0.5rem   |
| `--wisp-spacing-md`     | 1rem     |
| `--wisp-spacing-lg`     | 1.5rem   |
| `--wisp-spacing-xl`     | 3rem     |

### Typography

| Property                      | Default  |
|-------------------------------|----------|
| `--wisp-font-family`          | sans-serif |
| `--wisp-font-size-hero`       | 3rem     |
| `--wisp-font-size-4x`         | 2.25rem  |
| `--wisp-font-size-3x`         | 1.875rem |
| `--wisp-font-size-2x`         | 1.5rem   |
| `--wisp-font-size-xl`         | 1.25rem  |
| `--wisp-font-size-lg`         | 1.125rem |
| `--wisp-font-size-md`         | 1rem     |
| `--wisp-font-size-sm`         | 0.875rem |
| `--wisp-font-weight-bold`     | 700      |
| `--wisp-font-weight-semibold` | 600      |
| `--wisp-font-weight-medium`   | 500      |
| `--wisp-font-weight-regular`  | 400      |

### Colors

| Property                      | Default  |
|-------------------------------|----------|
| `--wisp-body-text`            | #0f172a  |
| `--wisp-color-link`           | #0d6efd  |
| `--wisp-color-primary`        | #1d4ed8  |
| `--wisp-color-primary-text`   | #ffffff  |
| `--wisp-color-secondary`      | #475569  |
| `--wisp-color-secondary-text` | #ffffff  |
| `--wisp-color-neutral`        | #f1f5f9  |
| `--wisp-color-neutral-text`   | #0f172a  |
| `--wisp-color-surface`        | #ffffff  |
| `--wisp-color-surface-text`   | #0f172a  |
| `--wisp-focus-color`          | #3b82f6  |

### Components

#### Badge

| Property                      | Default |
|-------------------------------|---------|
| `--wisp-badge-border-radius`  | 4px     |

#### Button

| Property                       | Default |
|--------------------------------|---------|
| `--wisp-button-border-radius`  | 4px     |

#### Card

| Property                      | Default |
|-------------------------------|---------|
| `--wisp-card-border-color`    | #ccc    |
| `--wisp-card-border-radius`   | 6px     |

#### Container

| Property                   | Default |
|----------------------------|---------|
| `--wisp-container-width`   | 1140px  |

#### Input

| Property                       | Default |
|--------------------------------|---------|
| `--wisp-input-border-color`    | #8c8c8c |
| `--wisp-input-border-radius`   | 4px     |

#### Scroll

| Property                      | Default |
|-------------------------------|---------|
| `--wisp-scroll-border-color`  | #ccc    |
| `--wisp-scroll-min-width`     | 40em    |

#### Table

| Property                           | Default |
|------------------------------------|---------|
| `--wisp-table-border-color`        | #ccc    |
| `--wisp-table-cell-block-padding`  | 0.5rem  |
| `--wisp-table-cell-inline-padding` | 1rem    |

### Behaviors

| Property            | Default |
|---------------------|---------|
| `--wisp-duration`   | 200ms   |