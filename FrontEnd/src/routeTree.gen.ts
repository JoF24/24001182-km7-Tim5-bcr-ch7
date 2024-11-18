/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()
const AdminTypeLazyImport = createFileRoute('/admin/type')()
const AdminTransmissionsLazyImport = createFileRoute('/admin/transmissions')()
const AdminManufacturesLazyImport = createFileRoute('/admin/manufactures')()
const AdminFuelsLazyImport = createFileRoute('/admin/fuels')()
const AdminTypesRefreshLazyImport = createFileRoute('/admin/types/refresh')()
const AdminTypesCreateLazyImport = createFileRoute('/admin/types/create')()
const AdminTransmissionRefreshLazyImport = createFileRoute(
  '/admin/transmission/refresh',
)()
const AdminTransmissionCreateLazyImport = createFileRoute(
  '/admin/transmission/create',
)()
const AdminManufactureRefreshLazyImport = createFileRoute(
  '/admin/manufacture/refresh',
)()
const AdminManufactureCreateLazyImport = createFileRoute(
  '/admin/manufacture/create',
)()
const AdminFuelRefreshLazyImport = createFileRoute('/admin/fuel/refresh')()
const AdminFuelCreateLazyImport = createFileRoute('/admin/fuel/create')()
const AdminTypesEditIdLazyImport = createFileRoute('/admin/types/edit/$id')()
const AdminTransmissionEditIdLazyImport = createFileRoute(
  '/admin/transmission/edit/$id',
)()
const AdminManufactureEditIdLazyImport = createFileRoute(
  '/admin/manufacture/edit/$id',
)()
const AdminFuelEditIdLazyImport = createFileRoute('/admin/fuel/edit/$id')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AdminTypeLazyRoute = AdminTypeLazyImport.update({
  id: '/admin/type',
  path: '/admin/type',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/admin/type.lazy').then((d) => d.Route))

const AdminTransmissionsLazyRoute = AdminTransmissionsLazyImport.update({
  id: '/admin/transmissions',
  path: '/admin/transmissions',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/transmissions.lazy').then((d) => d.Route),
)

const AdminManufacturesLazyRoute = AdminManufacturesLazyImport.update({
  id: '/admin/manufactures',
  path: '/admin/manufactures',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/manufactures.lazy').then((d) => d.Route),
)

const AdminFuelsLazyRoute = AdminFuelsLazyImport.update({
  id: '/admin/fuels',
  path: '/admin/fuels',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/admin/fuels.lazy').then((d) => d.Route))

const AdminTypesRefreshLazyRoute = AdminTypesRefreshLazyImport.update({
  id: '/admin/types/refresh',
  path: '/admin/types/refresh',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/types/refresh.lazy').then((d) => d.Route),
)

const AdminTypesCreateLazyRoute = AdminTypesCreateLazyImport.update({
  id: '/admin/types/create',
  path: '/admin/types/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/types/create.lazy').then((d) => d.Route),
)

const AdminTransmissionRefreshLazyRoute =
  AdminTransmissionRefreshLazyImport.update({
    id: '/admin/transmission/refresh',
    path: '/admin/transmission/refresh',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/admin/transmission/refresh.lazy').then((d) => d.Route),
  )

const AdminTransmissionCreateLazyRoute =
  AdminTransmissionCreateLazyImport.update({
    id: '/admin/transmission/create',
    path: '/admin/transmission/create',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/admin/transmission/create.lazy').then((d) => d.Route),
  )

const AdminManufactureRefreshLazyRoute =
  AdminManufactureRefreshLazyImport.update({
    id: '/admin/manufacture/refresh',
    path: '/admin/manufacture/refresh',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/admin/manufacture/refresh.lazy').then((d) => d.Route),
  )

const AdminManufactureCreateLazyRoute = AdminManufactureCreateLazyImport.update(
  {
    id: '/admin/manufacture/create',
    path: '/admin/manufacture/create',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/admin/manufacture/create.lazy').then((d) => d.Route),
)

const AdminFuelRefreshLazyRoute = AdminFuelRefreshLazyImport.update({
  id: '/admin/fuel/refresh',
  path: '/admin/fuel/refresh',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/fuel/refresh.lazy').then((d) => d.Route),
)

const AdminFuelCreateLazyRoute = AdminFuelCreateLazyImport.update({
  id: '/admin/fuel/create',
  path: '/admin/fuel/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/fuel/create.lazy').then((d) => d.Route),
)

const AdminTypesEditIdLazyRoute = AdminTypesEditIdLazyImport.update({
  id: '/admin/types/edit/$id',
  path: '/admin/types/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/types/edit/$id.lazy').then((d) => d.Route),
)

const AdminTransmissionEditIdLazyRoute =
  AdminTransmissionEditIdLazyImport.update({
    id: '/admin/transmission/edit/$id',
    path: '/admin/transmission/edit/$id',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/admin/transmission/edit/$id.lazy').then((d) => d.Route),
  )

const AdminManufactureEditIdLazyRoute = AdminManufactureEditIdLazyImport.update(
  {
    id: '/admin/manufacture/edit/$id',
    path: '/admin/manufacture/edit/$id',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/admin/manufacture/edit/$id.lazy').then((d) => d.Route),
)

const AdminFuelEditIdLazyRoute = AdminFuelEditIdLazyImport.update({
  id: '/admin/fuel/edit/$id',
  path: '/admin/fuel/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/admin/fuel/edit/$id.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/fuels': {
      id: '/admin/fuels'
      path: '/admin/fuels'
      fullPath: '/admin/fuels'
      preLoaderRoute: typeof AdminFuelsLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/manufactures': {
      id: '/admin/manufactures'
      path: '/admin/manufactures'
      fullPath: '/admin/manufactures'
      preLoaderRoute: typeof AdminManufacturesLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/transmissions': {
      id: '/admin/transmissions'
      path: '/admin/transmissions'
      fullPath: '/admin/transmissions'
      preLoaderRoute: typeof AdminTransmissionsLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/type': {
      id: '/admin/type'
      path: '/admin/type'
      fullPath: '/admin/type'
      preLoaderRoute: typeof AdminTypeLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/fuel/create': {
      id: '/admin/fuel/create'
      path: '/admin/fuel/create'
      fullPath: '/admin/fuel/create'
      preLoaderRoute: typeof AdminFuelCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/fuel/refresh': {
      id: '/admin/fuel/refresh'
      path: '/admin/fuel/refresh'
      fullPath: '/admin/fuel/refresh'
      preLoaderRoute: typeof AdminFuelRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/manufacture/create': {
      id: '/admin/manufacture/create'
      path: '/admin/manufacture/create'
      fullPath: '/admin/manufacture/create'
      preLoaderRoute: typeof AdminManufactureCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/manufacture/refresh': {
      id: '/admin/manufacture/refresh'
      path: '/admin/manufacture/refresh'
      fullPath: '/admin/manufacture/refresh'
      preLoaderRoute: typeof AdminManufactureRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/transmission/create': {
      id: '/admin/transmission/create'
      path: '/admin/transmission/create'
      fullPath: '/admin/transmission/create'
      preLoaderRoute: typeof AdminTransmissionCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/transmission/refresh': {
      id: '/admin/transmission/refresh'
      path: '/admin/transmission/refresh'
      fullPath: '/admin/transmission/refresh'
      preLoaderRoute: typeof AdminTransmissionRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/types/create': {
      id: '/admin/types/create'
      path: '/admin/types/create'
      fullPath: '/admin/types/create'
      preLoaderRoute: typeof AdminTypesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/types/refresh': {
      id: '/admin/types/refresh'
      path: '/admin/types/refresh'
      fullPath: '/admin/types/refresh'
      preLoaderRoute: typeof AdminTypesRefreshLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/fuel/edit/$id': {
      id: '/admin/fuel/edit/$id'
      path: '/admin/fuel/edit/$id'
      fullPath: '/admin/fuel/edit/$id'
      preLoaderRoute: typeof AdminFuelEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/manufacture/edit/$id': {
      id: '/admin/manufacture/edit/$id'
      path: '/admin/manufacture/edit/$id'
      fullPath: '/admin/manufacture/edit/$id'
      preLoaderRoute: typeof AdminManufactureEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/transmission/edit/$id': {
      id: '/admin/transmission/edit/$id'
      path: '/admin/transmission/edit/$id'
      fullPath: '/admin/transmission/edit/$id'
      preLoaderRoute: typeof AdminTransmissionEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin/types/edit/$id': {
      id: '/admin/types/edit/$id'
      path: '/admin/types/edit/$id'
      fullPath: '/admin/types/edit/$id'
      preLoaderRoute: typeof AdminTypesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/admin/fuels': typeof AdminFuelsLazyRoute
  '/admin/manufactures': typeof AdminManufacturesLazyRoute
  '/admin/transmissions': typeof AdminTransmissionsLazyRoute
  '/admin/type': typeof AdminTypeLazyRoute
  '/admin/fuel/create': typeof AdminFuelCreateLazyRoute
  '/admin/fuel/refresh': typeof AdminFuelRefreshLazyRoute
  '/admin/manufacture/create': typeof AdminManufactureCreateLazyRoute
  '/admin/manufacture/refresh': typeof AdminManufactureRefreshLazyRoute
  '/admin/transmission/create': typeof AdminTransmissionCreateLazyRoute
  '/admin/transmission/refresh': typeof AdminTransmissionRefreshLazyRoute
  '/admin/types/create': typeof AdminTypesCreateLazyRoute
  '/admin/types/refresh': typeof AdminTypesRefreshLazyRoute
  '/admin/fuel/edit/$id': typeof AdminFuelEditIdLazyRoute
  '/admin/manufacture/edit/$id': typeof AdminManufactureEditIdLazyRoute
  '/admin/transmission/edit/$id': typeof AdminTransmissionEditIdLazyRoute
  '/admin/types/edit/$id': typeof AdminTypesEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/admin/fuels': typeof AdminFuelsLazyRoute
  '/admin/manufactures': typeof AdminManufacturesLazyRoute
  '/admin/transmissions': typeof AdminTransmissionsLazyRoute
  '/admin/type': typeof AdminTypeLazyRoute
  '/admin/fuel/create': typeof AdminFuelCreateLazyRoute
  '/admin/fuel/refresh': typeof AdminFuelRefreshLazyRoute
  '/admin/manufacture/create': typeof AdminManufactureCreateLazyRoute
  '/admin/manufacture/refresh': typeof AdminManufactureRefreshLazyRoute
  '/admin/transmission/create': typeof AdminTransmissionCreateLazyRoute
  '/admin/transmission/refresh': typeof AdminTransmissionRefreshLazyRoute
  '/admin/types/create': typeof AdminTypesCreateLazyRoute
  '/admin/types/refresh': typeof AdminTypesRefreshLazyRoute
  '/admin/fuel/edit/$id': typeof AdminFuelEditIdLazyRoute
  '/admin/manufacture/edit/$id': typeof AdminManufactureEditIdLazyRoute
  '/admin/transmission/edit/$id': typeof AdminTransmissionEditIdLazyRoute
  '/admin/types/edit/$id': typeof AdminTypesEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/admin/fuels': typeof AdminFuelsLazyRoute
  '/admin/manufactures': typeof AdminManufacturesLazyRoute
  '/admin/transmissions': typeof AdminTransmissionsLazyRoute
  '/admin/type': typeof AdminTypeLazyRoute
  '/admin/fuel/create': typeof AdminFuelCreateLazyRoute
  '/admin/fuel/refresh': typeof AdminFuelRefreshLazyRoute
  '/admin/manufacture/create': typeof AdminManufactureCreateLazyRoute
  '/admin/manufacture/refresh': typeof AdminManufactureRefreshLazyRoute
  '/admin/transmission/create': typeof AdminTransmissionCreateLazyRoute
  '/admin/transmission/refresh': typeof AdminTransmissionRefreshLazyRoute
  '/admin/types/create': typeof AdminTypesCreateLazyRoute
  '/admin/types/refresh': typeof AdminTypesRefreshLazyRoute
  '/admin/fuel/edit/$id': typeof AdminFuelEditIdLazyRoute
  '/admin/manufacture/edit/$id': typeof AdminManufactureEditIdLazyRoute
  '/admin/transmission/edit/$id': typeof AdminTransmissionEditIdLazyRoute
  '/admin/types/edit/$id': typeof AdminTypesEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/admin/fuels'
    | '/admin/manufactures'
    | '/admin/transmissions'
    | '/admin/type'
    | '/admin/fuel/create'
    | '/admin/fuel/refresh'
    | '/admin/manufacture/create'
    | '/admin/manufacture/refresh'
    | '/admin/transmission/create'
    | '/admin/transmission/refresh'
    | '/admin/types/create'
    | '/admin/types/refresh'
    | '/admin/fuel/edit/$id'
    | '/admin/manufacture/edit/$id'
    | '/admin/transmission/edit/$id'
    | '/admin/types/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/admin/fuels'
    | '/admin/manufactures'
    | '/admin/transmissions'
    | '/admin/type'
    | '/admin/fuel/create'
    | '/admin/fuel/refresh'
    | '/admin/manufacture/create'
    | '/admin/manufacture/refresh'
    | '/admin/transmission/create'
    | '/admin/transmission/refresh'
    | '/admin/types/create'
    | '/admin/types/refresh'
    | '/admin/fuel/edit/$id'
    | '/admin/manufacture/edit/$id'
    | '/admin/transmission/edit/$id'
    | '/admin/types/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/admin/fuels'
    | '/admin/manufactures'
    | '/admin/transmissions'
    | '/admin/type'
    | '/admin/fuel/create'
    | '/admin/fuel/refresh'
    | '/admin/manufacture/create'
    | '/admin/manufacture/refresh'
    | '/admin/transmission/create'
    | '/admin/transmission/refresh'
    | '/admin/types/create'
    | '/admin/types/refresh'
    | '/admin/fuel/edit/$id'
    | '/admin/manufacture/edit/$id'
    | '/admin/transmission/edit/$id'
    | '/admin/types/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  AdminFuelsLazyRoute: typeof AdminFuelsLazyRoute
  AdminManufacturesLazyRoute: typeof AdminManufacturesLazyRoute
  AdminTransmissionsLazyRoute: typeof AdminTransmissionsLazyRoute
  AdminTypeLazyRoute: typeof AdminTypeLazyRoute
  AdminFuelCreateLazyRoute: typeof AdminFuelCreateLazyRoute
  AdminFuelRefreshLazyRoute: typeof AdminFuelRefreshLazyRoute
  AdminManufactureCreateLazyRoute: typeof AdminManufactureCreateLazyRoute
  AdminManufactureRefreshLazyRoute: typeof AdminManufactureRefreshLazyRoute
  AdminTransmissionCreateLazyRoute: typeof AdminTransmissionCreateLazyRoute
  AdminTransmissionRefreshLazyRoute: typeof AdminTransmissionRefreshLazyRoute
  AdminTypesCreateLazyRoute: typeof AdminTypesCreateLazyRoute
  AdminTypesRefreshLazyRoute: typeof AdminTypesRefreshLazyRoute
  AdminFuelEditIdLazyRoute: typeof AdminFuelEditIdLazyRoute
  AdminManufactureEditIdLazyRoute: typeof AdminManufactureEditIdLazyRoute
  AdminTransmissionEditIdLazyRoute: typeof AdminTransmissionEditIdLazyRoute
  AdminTypesEditIdLazyRoute: typeof AdminTypesEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  AdminFuelsLazyRoute: AdminFuelsLazyRoute,
  AdminManufacturesLazyRoute: AdminManufacturesLazyRoute,
  AdminTransmissionsLazyRoute: AdminTransmissionsLazyRoute,
  AdminTypeLazyRoute: AdminTypeLazyRoute,
  AdminFuelCreateLazyRoute: AdminFuelCreateLazyRoute,
  AdminFuelRefreshLazyRoute: AdminFuelRefreshLazyRoute,
  AdminManufactureCreateLazyRoute: AdminManufactureCreateLazyRoute,
  AdminManufactureRefreshLazyRoute: AdminManufactureRefreshLazyRoute,
  AdminTransmissionCreateLazyRoute: AdminTransmissionCreateLazyRoute,
  AdminTransmissionRefreshLazyRoute: AdminTransmissionRefreshLazyRoute,
  AdminTypesCreateLazyRoute: AdminTypesCreateLazyRoute,
  AdminTypesRefreshLazyRoute: AdminTypesRefreshLazyRoute,
  AdminFuelEditIdLazyRoute: AdminFuelEditIdLazyRoute,
  AdminManufactureEditIdLazyRoute: AdminManufactureEditIdLazyRoute,
  AdminTransmissionEditIdLazyRoute: AdminTransmissionEditIdLazyRoute,
  AdminTypesEditIdLazyRoute: AdminTypesEditIdLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/login",
        "/profile",
        "/register",
        "/admin/fuels",
        "/admin/manufactures",
        "/admin/transmissions",
        "/admin/type",
        "/admin/fuel/create",
        "/admin/fuel/refresh",
        "/admin/manufacture/create",
        "/admin/manufacture/refresh",
        "/admin/transmission/create",
        "/admin/transmission/refresh",
        "/admin/types/create",
        "/admin/types/refresh",
        "/admin/fuel/edit/$id",
        "/admin/manufacture/edit/$id",
        "/admin/transmission/edit/$id",
        "/admin/types/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/profile": {
      "filePath": "profile.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/admin/fuels": {
      "filePath": "admin/fuels.lazy.jsx"
    },
    "/admin/manufactures": {
      "filePath": "admin/manufactures.lazy.jsx"
    },
    "/admin/transmissions": {
      "filePath": "admin/transmissions.lazy.jsx"
    },
    "/admin/type": {
      "filePath": "admin/type.lazy.jsx"
    },
    "/admin/fuel/create": {
      "filePath": "admin/fuel/create.lazy.jsx"
    },
    "/admin/fuel/refresh": {
      "filePath": "admin/fuel/refresh.lazy.jsx"
    },
    "/admin/manufacture/create": {
      "filePath": "admin/manufacture/create.lazy.jsx"
    },
    "/admin/manufacture/refresh": {
      "filePath": "admin/manufacture/refresh.lazy.jsx"
    },
    "/admin/transmission/create": {
      "filePath": "admin/transmission/create.lazy.jsx"
    },
    "/admin/transmission/refresh": {
      "filePath": "admin/transmission/refresh.lazy.jsx"
    },
    "/admin/types/create": {
      "filePath": "admin/types/create.lazy.jsx"
    },
    "/admin/types/refresh": {
      "filePath": "admin/types/refresh.lazy.jsx"
    },
    "/admin/fuel/edit/$id": {
      "filePath": "admin/fuel/edit/$id.lazy.jsx"
    },
    "/admin/manufacture/edit/$id": {
      "filePath": "admin/manufacture/edit/$id.lazy.jsx"
    },
    "/admin/transmission/edit/$id": {
      "filePath": "admin/transmission/edit/$id.lazy.jsx"
    },
    "/admin/types/edit/$id": {
      "filePath": "admin/types/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
