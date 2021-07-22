import { USER_MAIN_DATA, USER_PERFORMANCE } from "./mockedData";

const ACTIVITY_BY_KIND = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

export class MockedAPI {
  getActivitiesById(userId) {
    const activities = [];

    for (let user of USER_PERFORMANCE) {
      if (user.userId === userId) {
        for (let item of user.data) {
          activities.push({
            activity: ACTIVITY_BY_KIND[item.kind],
            value: item.value,
          });
        }

        return activities;
      }
    }

    for (let key in ACTIVITY_BY_KIND) {
      activities.push({
        activity: ACTIVITY_BY_KIND[key],
        value: 0,
      });
    }

    return activities;
  }

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
