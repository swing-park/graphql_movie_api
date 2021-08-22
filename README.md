# graphql_movie_api

- Graphql은 Over-fetching과 Under-fetching을 방지함.

- query는 데이터 요청할 때만
- mutation은 데이터 변경
- resolvers는 쿼리를 해결하는 스크립트

## Flow

query가 보내짐 -> 서버에서 type을 찾음 -> 쿼리에 맞는 resolver를 찾음

## Query

- query는 다양한 타입을 명시할 수 있음.

## Resolvers

- 서버에서 요청을 받음
- 서버가 쿼리나 뮤테이션 정의를 발견하면, 리솔버를 찾을 것이고 함수를 실행한다.
- 처음 인자는 현재 object를 보냄.
- 어떤 것도 될수 있음. 다른 api에 갈수도 있고, database에 갈수도 있음
- 기본적으로 View같은 것이고, schema는 URL같은 거임

## Mutation

- Mutation후에 서버를 껏다 키면, 다시 원래 데이터로 돌아옴. 메모리에 저장되기 때문.
