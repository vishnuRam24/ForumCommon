export class datasType {
  id?: string;
  name?: string;
  age?: string;
  email?: string;
  country?: string;
  location?: string;
  timezone?: string;
  communitiesFollowed?: string;

  // Both must be inter related based upon the user

  // To Store the liked post Id's
  likedPost?: Set<number>;
  // To store the disliked Post Id's
  dislikedPost?: Set<number>;


  joinedOn?: string;
  dob?: string;
  skills?: string;
  carrier?: string;
  totalQuestions?: number;
  totalAnswered?: number;
  interestedAreas?: string;

  // Have to use Toggle icon between True or false; true->show  false->notshow
  profileVisiblity?: boolean;

}
