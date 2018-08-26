import { BlogText } from "../../../../Text/title/titleContent/text/style";

export const CommentText = BlogText.extend`
  margin-bottom: 10px;

  @media (min-width: 320px) and (max-width: 568px) {
    font-size: 14px;
  }
`;
