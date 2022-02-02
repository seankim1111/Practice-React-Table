export const COLUMNS = [
  {
    Header: "Id",
    // Header 속성에는 테이블 헤더에 보여줄 텍스트를 명시
    Footer: "Id",
    accessor: "id",
    // accessor 속성에는 해당 열을 data 객체의 어느 속성을 읽어야하는지 명시
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    // Header 속성에는 테이블 헤더에 보여줄 텍스트를 명시
    Footer: "Id",
    accessor: "id",
    // accessor 속성에는 해당 열을 data 객체의 어느 속성을 읽어야하는지 명시
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    accessor: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
