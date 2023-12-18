import _parse from './parse/index.js'
import ParseServer from "parse-server"
ParseServer.S3Adapter

export default async ({ servableEngineConfig }) => ({
  ..._parse,
  Object: Parse.Object,
  Query: Parse.Query,
  Cloud: Parse.Cloud,
  User: Parse.User,
  Role: Parse.Role,
  Installation: Parse.Installation,
  LiveQuery: Parse.LiveQuery,
  Session: Parse.Session,
  Schema: Parse.Schema,
  Config: Parse.Config,
  Schema: Parse.Schema,
})

