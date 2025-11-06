import { useEffect, useState } from "react";
import { nowToHHMM } from "../../services/date-service";
import { AppText } from "../AppText/AppText";
import { styles } from "./Clock.style";

export function Clock() {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <AppText style={styles.time}>{time}</AppText>
    </>
  );
}
