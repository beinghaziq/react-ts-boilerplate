# React + TypeScript + Vite

src/
├── app/                   # Core application setup
│   ├── hooks.ts           # Redux hooks
│   ├── store.ts          # Redux store
│   └── rootReducer.ts    # Combined reducers
├── common/               # Shared components and utilities
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Shared custom hooks
│   ├── types/            # Global type definitions
│   └── utils/            # Utility functions
├── features/             # Feature modules
│   ├── auth/             # Example feature module
│   │   ├── api/          # RTK Query API definitions
│   │   ├── components/   # Feature components
│   │   ├── hooks/        # Feature custom hooks
│   │   ├── types/        # Feature types
│   │   └── slice.ts      # Redux slice
│   └── ...               # Other features
├── pages/                # Page components
├── routes/               # Routing configuration
├── services/             # API service configs
├── styles/               # Global styles
├── App.tsx
└── main.tsx