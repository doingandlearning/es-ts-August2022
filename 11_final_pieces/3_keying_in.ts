{
  type APIResponse = {
    user: {
      userId: string;
      friendList: {
        count: number;
        friends: {
          firstName: string;
          lastName: string;
        }[];
      };
    };
  };

	// type FriendList = {
  // count: number
	// friends: {
	// 	 firstName: string
	// 	 lastName: string	}[]
  // }

	type FriendList = APIResponse['user']['friendList']

	function getAPIResponse(): Promise<APIResponse> {
		// ...
	}

	function renderFriendList(friendList: unknown) {
		// ...
		return
	}
	let response = await getAPIResponse();
	renderFriendList(response.user.friendList);}
}
