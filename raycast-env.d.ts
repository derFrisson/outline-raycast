/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Key - Your Outline API key. Generate one in Settings → API Keys. */
  "apiKey": string,
  /** Instance URL - URL of your Outline instance (leave empty for cloud version) */
  "instanceUrl": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-documents` command */
  export type SearchDocuments = ExtensionPreferences & {}
  /** Preferences accessible in the `create-document` command */
  export type CreateDocument = ExtensionPreferences & {}
  /** Preferences accessible in the `starred-documents` command */
  export type StarredDocuments = ExtensionPreferences & {}
  /** Preferences accessible in the `recent-documents` command */
  export type RecentDocuments = ExtensionPreferences & {}
  /** Preferences accessible in the `browse-collections` command */
  export type BrowseCollections = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-documents` command */
  export type SearchDocuments = {}
  /** Arguments passed to the `create-document` command */
  export type CreateDocument = {}
  /** Arguments passed to the `starred-documents` command */
  export type StarredDocuments = {}
  /** Arguments passed to the `recent-documents` command */
  export type RecentDocuments = {}
  /** Arguments passed to the `browse-collections` command */
  export type BrowseCollections = {}
}

