import { USER_MAIN_DATA } from "./mockedData";

export class MockedAPI {
  getFirstNameById(userId) {
    for (let user of USER_MAIN_DATA) {
      if (user.id === userId) {
        return user.userInfos.firstName;
      }
    }

    return "unknown user";
  }

  getKeyDataById(userId) {
    for (let user of USER_MAIN_DATA) {
      if (user.id === userId) {
        return user.keyData;
      }
    }

    return {
      calorieCount: null,
      proteinCount: null,
      carbohydrateCount: null,
      lipidCount: null,
    };
  }

  getTodayScoreById(userId) {
    for (let user of USER_MAIN_DATA) {
      if (user.id === userId) {
        return user.todayScore;
      }
    }

    return 0;
  }
}
