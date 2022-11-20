export class CollectFormResponseDto {
  _items: {
    answers: {
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
    }[];
    client: string;
    formId: string;
    responseId: string;
  }[];
}
