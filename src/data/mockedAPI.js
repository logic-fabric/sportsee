import {
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mockedData";

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

  getAverageSessionsById(userId) {
    const averageSessions = [
      {
        day: "L",
        sessionLength: 0,
      },
      {
        day: "M",
        sessionLength: 0,
      },
      {
        day: "M",
        sessionLength: 0,
      },
      {
        day: "J",
        sessionLength: 0,
      },
      {
        day: "V",
        sessionLength: 0,
      },
      {
        day: "S",
        sessionLength: 0,
      },
      {
        day: "D",
        sessionLength: 0,
      },
    ];

    for (let user of USER_AVERAGE_SESSIONS) {
      if (user.userId === userId) {
        for (let index in user.sessions) {
          averageSessions[index].sessionLength =
            user.sessions[index].sessionLength;
        }
      }
    }

    return averageSessions;
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
