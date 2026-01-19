# Localization Automation Guide

## Overview
This project uses a custom i18n system with JSON locale files. When adding or editing copy, you MUST update all translation files.

## Supported Languages
- English (en) - Default/fallback
- French (fr)
- Italian (it)
- Spanish (es)

## File Locations
- Locale JSON files: `src/locales/{en,fr,it,es}.json`
- Index exports: `src/locales/index.ts`
- Translation hook: `src/hooks/useTranslation.tsx`

## When Adding New Copy

### Step 1: Add key to ALL locale files
When adding new text, add the translation key to ALL four locale files:

```json
// src/locales/en.json
{
  "section": {
    "newKey": "English text"
  }
}

// src/locales/fr.json
{
  "section": {
    "newKey": "French text"
  }
}

// src/locales/it.json
{
  "section": {
    "newKey": "Italian text"
  }
}

// src/locales/es.json
{
  "section": {
    "newKey": "Spanish text"
  }
}
```

### Step 2: Use the translation in components
```tsx
import { useTranslation } from "@/hooks/useTranslation";

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('section.newKey')}</h1>;
};
```

## When Editing Existing Copy
Update the text in ALL four locale files to maintain consistency.

## Key Naming Conventions
- Use dot notation for nested keys: `events.filters.upcomingEvents`
- Group by feature/page: `events.*`, `routes.*`, `common.*`
- Use camelCase for key names
- Keep keys descriptive but concise

## Translation Structure
```
{
  "pageName": {
    "sectionName": {
      "keyName": "Translation"
    }
  },
  "common": {
    // Shared translations across pages
  }
}
```

## Language Detection
The system automatically:
1. Checks localStorage for saved preference
2. Detects browser language via `navigator.language`
3. Falls back to English if unsupported

## Adding New Languages
1. Create new JSON file: `src/locales/{lang}.json`
2. Copy structure from `en.json` and translate
3. Update `src/locales/index.ts`:
   - Import the new locale
   - Add to `locales` object
   - Add to `supportedLocales` array
