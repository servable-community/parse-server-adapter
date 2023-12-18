import _parse from './parse/index.js'
import ParseServer from "parse-server"
ParseServer.S3Adapter

export const appObject = ({ servableEngineConfig }) => Parse.Object

export const appQuery = ({ servableEngineConfig }) => Parse.Query

export const appCloud = ({ servableEngineConfig }) => Parse.Cloud

export const appUtils = ({ servableEngineConfig }) => _parse

export const appUser = ({ servableEngineConfig }) => Parse.User

export const appRole = ({ servableEngineConfig }) => Parse.Role

export const appInstallation = ({ servableEngineConfig }) => Parse.Installation

export const appLiveQuery = ({ servableEngineConfig }) => Parse.LiveQuery

export const appSession = ({ servableEngineConfig }) => Parse.Session

export const appSchema = ({ servableEngineConfig }) => Parse.Schema

export const appConfig = ({ servableEngineConfig }) => Parse.Config

export const appNative = ({ servableEngineConfig }) => Parse
