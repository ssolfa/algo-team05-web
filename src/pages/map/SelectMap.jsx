import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Title, IntroText, ButtonStyle } from "@/styles/styles";
import styled from "styled-components";
import B_Map from "@/assets/images/map/beforemap.svg";
import Tag from "@/components/map/Tag";

export const BeforeMap = styled.div`
  position: relative;
  top: 20px;
  width: 390px;
  height: 552px;
  background-repeat: no-repeat;
  background: url(${B_Map});
`;

export default function SelectMap() {
  const navigate = useNavigate();

  const [area, setArea] = useState(null);

  console.log("선택한 지역은 : ", area);

  // 데이터 전송 함수
  const handleSubmit = () => {
    navigate(`/shelter-list`, { state: area });
  };

  // 자식 컴포넌트 Map으로 함수를 전달하여 자식 컴포넌트의 값을 부모 컴포넌트로 가져온다.
  return (
    <Wrapper>
      <Title top="60px">대한민국</Title>
      <BeforeMap>
        <Tag
          top="75px"
          left="122px"
          hover="#D6566F"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Seoul
        </Tag>
        <Tag
          top="100px"
          left="62px"
          hover="#A3C370"
          x="180"
          y="-120"
          r="135"
          setArea={setArea}
        >
          Incheon
        </Tag>
        <Tag
          top="35px"
          left="140px"
          hover="#EC8189"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Gyeonggi-do
        </Tag>

        <Tag
          top="60px"
          left="230px"
          hover="#7CBC27"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Gangwon-do
        </Tag>
        <Tag
          top="197px"
          left="138px"
          hover="#297750"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Sejong
        </Tag>
        <Tag
          top="213px"
          left="180px"
          hover="#378BAF"
          x="-260"
          y="-100"
          r="-135"
          setArea={setArea}
        >
          Daejeon
        </Tag>
        <Tag
          top="165px"
          left="55px"
          hover="#4DB787"
          x="-20"
          y="0"
          r="-185"
          setArea={setArea}
        >
          Chungcheongnam-do
        </Tag>
        <Tag
          top="150px"
          left="155px"
          hover="#7BC087"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Chungcheongbuk-do
        </Tag>
        <Tag
          top="180px"
          left="265px"
          hover="#378BAF"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Gyeongsangbuk-do
        </Tag>
        <Tag
          top="305px"
          left="185px"
          hover="#C7D925"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Gyeongsangnam-do
        </Tag>
        <Tag
          top="252px"
          left="263px"
          hover="#115D6B"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Daegu
        </Tag>
        <Tag
          top="295px"
          left="319px"
          hover="#3067FE"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Ulsan
        </Tag>
        <Tag
          top="335px"
          left="292px"
          hover="#AEBC1E"
          x="0"
          y="0"
          r="-185"
          setArea={setArea}
        >
          Busan
        </Tag>
        <Tag
          top="265px"
          left="114px"
          hover="#EDBA23"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Jeollabuk-do
        </Tag>
        <Tag
          top="335px"
          left="64px"
          hover="#F09053"
          x="-20"
          y="0"
          r="-185"
          setArea={setArea}
        >
          Jeollanam-do
        </Tag>
        <Tag
          top="375px"
          left="140px"
          hover="#CE7942"
          x="-260"
          y="-550"
          r="-45"
          setArea={setArea}
        >
          Gwangju
        </Tag>
        <Tag
          top="485px"
          left="95px"
          hover="#BC78B7"
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
        >
          Jeju
        </Tag>
      </BeforeMap>
      <IntroText>{!area ? "지역을 선택해주세요." : area}</IntroText>
      {!area ? (
        <ButtonStyle
          top="14px"
          onClick={handleSubmit}
          color="rgba(141, 166, 187, 0.3)"
          bg="#e7edf2"
        >
          선택 완료
        </ButtonStyle>
      ) : (
        <ButtonStyle top="14px" onClick={handleSubmit}>
          선택 완료
        </ButtonStyle>
      )}
    </Wrapper>
  );
}
