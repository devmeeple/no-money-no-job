# 무전무업(無錢無業)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black)

## 프로젝트 목적

서울도서관에서 이미 제공하는 [서비스](https://meta.seoul.go.kr/libseoul/index.php/default_search)를
개선한다. [잡코리아: 무전무업](https://img.jobkorea.co.kr/images/ContentsManagement/SmartEditor/2021/8/2021830102115_SEU.jpg)

- 파편화된 정보를 조합한다.

## 사용 기술

## 결과화면

## 배운점

## 문제해결

## BE Task

- NestJS, TypeORM, Postgresql, yarn
- 제대로된 서비스를 제공하려면 아키텍처를 잘 설계하고 적용해야 한다.

1) 데이터 모델을 설계하기
    - 오픈 API 데이터
    - 지도
    - 사용자
2) [데이터 넣기](https://blog.naver.com/PostView.naver?blogId=gi_balja&logNo=223085138550&parentCategoryNo=&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView)
3) API 만들기
    - 서울에 있는 모든 도서관 정보를 보여준다.
    - 사용자가 책을 검색할 때 책을 보유하고 있는 도서관만 출력한다.(단건)

- 예외 처리를 담당하는 공통 핸들러 만들기
- [Date](https://yozm.wishket.com/magazine/detail/1695/) 타입 대체하기
    - [TypeORM Date 타입 대체하기](https://jojoldu.tistory.com/600)
- 데이터베이스의 데이터를 갱신한다.
    - CSV 또는 OpenAPI를 스케줄링 기능을 사용하여 갱신

## FE Task

- [vue](https://ko.vuejs.org/)를 사용하여 화면구상
- 정적 웹 페이지를 제공하는 것이 맞는가? 동적 웹페이지를 제공하는 것이 맞는가?
- prettier: trailingComma all
- Date 다루기
    - date-fns, date-fns-tz
    - [네이버 data-fns](https://medium.com/naver-biz-dev/date-fns-64c962200506)
    - [data-fns 사용하기](https://techbukket.com/blog/date-fns-skills)

## 기능

- 사용자는 읽고 싶은 책을 검색한다.
- 책을 보유한 도서관이 지도에 표시된다. (화면)
- 가능하다면 빠른 길 찾기도 제공한다.

## 참고

### 기술

- [기술선택 정보](https://i-hope9.github.io/2021/07/20/Sparta-Web-Basic-Proj.html#%EA%B3%B5%EA%B3%B5%EB%8F%84%EC%84%9C%EA%B4%80-api)
- [오픈API: 서울특별시교육청 공공도서관 소장도서정보](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15001051)

### 데이터베이스

- [서울시 공공도서관 현황정보](https://data.seoul.go.kr/dataList/OA-15480/S/1/datasetView.do)
    - 도서관의 위치는 매번 갱신될 필요 없다. 따라서 CSV 또는 JSON으로 데이터를 채운다.

### 보충이 필요한 개념

- [HTTP 기본이해](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC)