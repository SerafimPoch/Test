import { ListCommentsContainer } from "../../../../../listComments/style";
import { SendButton } from "../../../../../newComment/sendButton/style";

export const EditFormContainer = ListCommentsContainer.extend`
  margin-bottom: 20px;
  align-items: flex-end;
`;

export const SendButtonEdit = SendButton.extend`
  margin-top: 10px;

  @media (min-width: 320px) and (max-width: 568px) {
    margin-right: 0px;
  }
`;
