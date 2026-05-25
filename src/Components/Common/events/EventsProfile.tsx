import { Fontname3 } from "@/Components/page/ManagerPage/Inquires/ManagerInquiresSelect";
import styled from "styled-components";
import { MdCelebration } from "react-icons/md";

const EventContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 700px;
  padding: 25px;
  border-radius: 20px;
`;

const Eventdescriptions = styled.div`
  border: 1px dotted rgba(0, 0, 0, 0.2);
  padding: 16px 20px;
  margin-top: 20px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 1.4;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const Eventdescriptions2 = styled.div`
  border: 1px dotted rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #4d102e;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 1.4;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

type Eventprops = {
  eventname: string;
};

export const EventsProfile = ({ eventname }: Eventprops) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <EventContainer>
        <Fontname3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              fontWeight: "bolder",
              color: "#7E57C2",
            }}
          >
            <MdCelebration size={24} color="#f39c12" />
            오픈 기념 이벤트
            <MdCelebration
              size={24}
              color="#f31295"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </Fontname3>
        <Eventdescriptions>{eventname}</Eventdescriptions>
        <Eventdescriptions2>
          추가로 제공되는 혜택이 있어요! 어느덧 청소 서비스를 시작한지 10주년을
          맞이하여 특별한 혜택을 드립니다. 홈페이지에 들어와서 전화 또는
          홈페이지 내 예약 서비스를 통해 예약을 진행한 손님에 한하여, 1만원을
          할인해드립니다. 많관부!!
        </Eventdescriptions2>
      </EventContainer>
    </div>
  );
};
