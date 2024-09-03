import not_found from "@assets/lottieFiles/not_found.json";
import error from "@assets/lottieFiles/error.json";
import loading from "@assets/lottieFiles/loading.json";
import empty from "@assets/lottieFiles/empty.json";
import succes from "@assets/lottieFiles/succes.json";
import Lottie from "lottie-react";

const LottieMap = {
  not_found,
  error,
  loading,
  empty,
  succes,
};

type LottieHandlerProps = {
  type: keyof typeof LottieMap;
  message?: string;
};

const LottieHandler = ({ type, message }: LottieHandlerProps) => {
  const lottie = LottieMap[type];
  return (
    <div>
      <Lottie
        animationData={lottie}
        style={{ width: "300px", margin: "40px auto" }}
      />
      <h3 style={{ textAlign: "center", color: "black" }}>{message}</h3>
    </div>
  );
};

export default LottieHandler;
