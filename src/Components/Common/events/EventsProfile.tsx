import { Fontname3 } from "@/Components/page/ManagerPage/Inquires/ManagerInquiresSelect";
import styled from "styled-components";
import { MdCelebration } from "react-icons/md";

const EventContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 700px;
  padding: 30px;
  border-radius: 30px;
`;

const Eventdescriptions = styled.div`
  border: 1px dotted rgba(0, 0, 0, 0.2);
  padding: 16px 20px;
  margin-top: 20px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #333433;
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
  padding: 16px 20px;
  margin-top: 20px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #4d1040;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 1.4;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const Eventdescriptions3 = styled.div`
  border: 1px dotted rgba(0, 0, 0, 0.2);
  padding: 16px 20px;
  margin-top: 20px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: #4d1040;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 1.4;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const Emphasis1 = styled.span`
  color: #e91e63;
  font-weight: bold;
`;

const CostFont = styled.span`
  color: #11204a;
  font-weight: bold;
`;

const PlusFont = styled.span`
  color: #2c19d8;
  font-weight: bold;
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
            오픈 기념 이벤트!!
            <MdCelebration
              size={24}
              color="#12c6f3"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </Fontname3>
        <Eventdescriptions>{eventname}</Eventdescriptions>
        <Eventdescriptions2>
          어느덧 하반기면 홈페이지를 만든지 1주년이 다 되어 가네요. <br />{" "}
          특별한 <Emphasis1>추가 혜택</Emphasis1>을 해드리기로 했어요. <br />
          이번에 홈페이지에 들어와 전화 또는 홈페이지 내 예약 서비스를 통해
          예약을 진행한 고객님들에 한하여,
          <CostFont>1만원</CostFont>을 <PlusFont>할인 </PlusFont> 해드립니다.{" "}
          <br /> 신청이 많았으면
        </Eventdescriptions2>
        <Eventdescriptions3>좋겠는데.....</Eventdescriptions3>
      </EventContainer>
    </div>
  );
};
