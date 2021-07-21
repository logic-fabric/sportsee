import { USER_MAIN_DATA } from "./mockedData";

export class MockedAPI {
  getUserFirstNameById(userId) {
    for (let user of USER_MAIN_DATA) {
      if (user.id === userId) {
        return user.userInfos.firstName;
      }
    }

    return "unknown user";
  }
}
