import { useEffect, useState } from "react";

let userTimeId: null | NodeJS.Timeout = null;
let reviewTimeId: null | NodeJS.Timeout = null;
let saveTimeId: null | NodeJS.Timeout = null;

const USER = 350;
const REVIEW = 21;
const SAVE = 35;

export const useAnimation = ($trigger: React.RefObject<HTMLElement>) => {
  const [transition, setTransition] = useState(false);
  const [user, setUser] = useState(0);
  const [review, setReview] = useState(0);
  const [save, setSave] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTransition(true);
      },
      {
        rootMargin: "-150px 0px 0px 0px"
      }
    );

    if ($trigger.current) io.observe($trigger.current);
  }, [$trigger]);

  useEffect(() => {
    if (transition) {
      setTimeout(() => {
        userTimeId = setInterval(() => {
          setUser(user => {
            if (user < USER) return user + 1;
            else {
              if (userTimeId) clearInterval(userTimeId);
              return USER;
            }
          });
        }, 700 / USER);
      }, 100);
    }
  }, [transition]);

  useEffect(() => {
    if (transition) {
      setTimeout(() => {
        reviewTimeId = setInterval(() => {
          setReview(review => {
            if (review < REVIEW) return review + 1;
            else {
              if (reviewTimeId) clearInterval(reviewTimeId);
              return REVIEW;
            }
          });
        }, 700 / REVIEW);
      }, 100);
    }
  }, [transition]);

  useEffect(() => {
    if (transition) {
      setTimeout(() => {
        saveTimeId = setInterval(() => {
          setSave(save => {
            if (save < SAVE) return save + 1;
            else {
              if (saveTimeId) clearInterval(saveTimeId);
              return SAVE;
            }
          });
        }, 700 / SAVE);
      }, 100);
    }
  }, [transition]);

  return {
    transition,
    user,
    review,
    save
  };
};
