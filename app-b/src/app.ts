import { faker } from '@faker-js/faker'
import { format } from '@test_ts_project_references/package-a'
import { word } from '@test_ts_project_references/package-b'
import { IncomingMessage, ServerResponse } from 'http'

export function handler(req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(
    JSON.stringify({
      data: `${format(word)} - ${faker.animal.type()}`,
    }),
  )
}
