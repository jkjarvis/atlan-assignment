interface CollectFormAnswer {
  text: string;
  questionId: string;
  responseId: string;
  questionTypeCode: string;
  questionTitle: string;
  questionAlias: string;
  location?: {
    coordinates: {
      latitude: number;
      longitude: number;
      accuracy: number;
    }[];
    type: string;
  };
  media?: string[];
}

interface CollectFormResponse {
  answers: CollectFormAnswer[];
  formId: string;
  responseId: string;
}

export { CollectFormAnswer, CollectFormResponse };
