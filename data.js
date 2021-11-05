export const filesData = [
  {
    id: "1",
    fileNumber: "2558",
    year: "2021",
    court: "صلح حقوق جنوب عمان",
    judge: "امجد الوزني",
    category: "حقوق عمالية",
    registryDate: "16-9-2021",
    status: "منظورة",
    judgementDate: "",
    judgementSummary: "",
    parties: {
      first: {
        title: "مدعي",
        data: [
          {
            id: "1",
            name: "ابراهيم جميل مرعي عثمان",
            identifiers: {
              id: "1",
              number: "000000",
              type: "بطاقة احوال شخصية",
            },
            side: "مدعي",
            lawers: [{ id: "1", name: "", phone: "" }],
          },
        ],
      },
      second: {
        title: "مدعى عليها",
        data: [
          {
            id: "2",
            name: "شركة الليان للتوريدات العامة",
            identifiers: {
              id: "2",
              number: "000000",
              type: "الرقم الوطني للمنشأة",
            },
            side: "مدعى عليها",
            lawers: [{ id: "1", name: "", phone: "" }],
          },
        ],
      },
    },
    sessions: [{ id: "1", date: "", judge: "", judgement: "" }],
    tasks: [{ id: "1", date: "", details: "", status: "" }],
  },
];
