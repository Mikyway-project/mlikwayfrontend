import { Key, useEffect, useRef, useState } from "react";
import { theme } from "@/SCSS/typecss";
import { Service, ServiceProfiling } from "../ServiceProfileing";
import styled, { css, keyframes } from "styled-components";

const ImageCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px;
  justify-items: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 20px;
  }
`;

interface ImageCardProps {
  image: string;
  onClick?: () => void;
  children?: React.ReactNode;
  $isVisible?: boolean;
}

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageCard = styled.div<ImageCardProps>`
  width: 100%;
  max-width: 400px;
  height: 180px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-end;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeSlideIn} 0.6s ease forwards;
    `}

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media screen and (max-width: 800px) {
    width: 170px;
    font-size: 12px;
  }
`;

const ServiceSelector = ({
  setSelect,
}: {
  setSelect: (service: string) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ImageCardContainer>
      {ServiceProfiling.map((service: Service, index: Key) => (
        <ImageCard
          key={index}
          image={service.image}
          onClick={() => setSelect(service.Service)}
          $isVisible={isVisible}
        >
          <div
            style={{
              color: `${theme.colors.charcoalBlack}`,
              backgroundColor: "rgba(198, 169, 169, 0.4)",
              padding: "6px 10px",
              borderRadius: "6px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {service.Service}
            <span style={{ color: `${theme.colors.cloudGrey}` }}>
              {service.target}
            </span>
          </div>
        </ImageCard>
      ))}
    </ImageCardContainer>
  );
};

export default ServiceSelector;
