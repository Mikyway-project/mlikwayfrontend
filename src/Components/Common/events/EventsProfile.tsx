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
            }}
          >
            <MdCelebration size={24} color="#f39c12" />
            오픈 기념 이벤트
            <MdCelebration
              size={24}
              color="#f39c12"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
        </Fontname3>
        <Eventdescriptions>{eventname}</Eventdescriptions>
      </EventContainer>
    </div>
  );
};
