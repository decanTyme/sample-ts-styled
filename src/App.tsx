import styled from "styled-components";

const bannerCow = new URL("./images/banner-cow.png", import.meta.url);
const cowIcon = new URL("./images/cow_icon.png", import.meta.url);
const searchIcon = new URL("./images/magnifying-glass.jpg", import.meta.url);

const Wrapper = styled.div`
  position: relative;
  max-width: 34rem;
  margin: auto;
  padding: 4rem 0;
`;

const AchievementContainer = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ControlBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInputIcon = styled.img.attrs({ alt: "Magnifying Glass" })`
  position: absolute;
  z-index: 1000;
  left: 0;
  height: 65%;
  width: fit-content;
  padding: 0.375rem;
`;

const SearchInput = styled.input.attrs({
  type: "search",
  placeholder: "Search...",
})`
  position: relative;
  padding: 0.5rem;
  padding-left: 2.5rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const SortSelect = styled.select`
  padding: 0.5rem;
  font-weight: 700;
  min-width: 10rem;
  text-align: center;
`;

const Card = styled.div`
  background-color: #303030;
  color: #dfdfdf;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Banner = styled(Card)`
  display: flex;
  padding: 0.3rem;
  gap: 0.3rem;
`;

const CowIcon = styled.img`
  border: 1.5px solid black;
`;

const BannerContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0.125rem;
`;

const BannerTitle = styled.h1`
  font-size: 1rem;
  color: #ffb400;
  text-align: center;
  font-weight: 600;
  text-shadow: 1px 1px 1px #1a1a1a;
`;

const BannerText = styled.p`
  flex-grow: 1;
  font-size: 0.9rem;
  padding: 0.4rem;
`;

const BannerFooter = styled.p`
  background-color: #009cde;
  color: white;
  padding: 0.125rem;
  text-align: center;
  font-weight: 600;
  font-size: smaller;
  text-shadow: 1px 1px 0px #1a1a1a;
  border: 1px solid black;
`;

const CowPack = styled(Card)``;

const CowPackTitle = styled.h2`
  background-color: #7289da;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  padding: 0.3rem;
  color: white;
  text-shadow: 1px 1px 0px #3a3a3a;
`;

const CowPackContent = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.45rem;
  justify-items: center;
  align-items: center;
  padding: 0.6rem;
`;

const CowPackIcon = styled(CowIcon)<{ disabled?: boolean }>`
  mix-blend-mode: ${({ disabled }) => (disabled ? `multiply` : ``)};
`;

const NavBar = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid #454a52;
  border-bottom: 3px solid #303030;
  background: rgb(27, 31, 37);
  background: linear-gradient(
    0deg,
    rgba(27, 31, 37, 1) 0%,
    rgba(43, 48, 54, 1) 100%
  );

  & > :not([hidden]) ~ :not([hidden]) {
    border-left: 1px solid rgba(255, 255, 255, 0.25);
  }
`;

const NavButton = styled.button.attrs({ type: "button" })<{
  disabled?: boolean;
}>`
  padding: 1rem;
  color: white;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? `` : `pointer`)};
  background-color: ${({ disabled }) => (disabled ? `#000` : `inherit`)};
  mix-blend-mode: ${({ disabled }) => (disabled ? `multiply` : ``)};
  opacity: ${({ disabled }) => (disabled ? `0.5` : ``)};

  &:hover:not([disabled]) {
    background-color: #456f6c;
  }
`;

function App() {
  return (
    <Wrapper>
      <AchievementContainer>
        <ControlBar>
          <SearchInputWrapper>
            <SearchInputIcon src={searchIcon.toString()} />
            <SearchInput />
          </SearchInputWrapper>

          <SortSelect name="sort" id="sort" title="sort">
            <option value="none">No Sort</option>
          </SortSelect>
        </ControlBar>

        <Banner>
          <CowIcon src={bannerCow.toString()} alt="Golden Money Cow" />

          <BannerContent>
            <BannerTitle>Select Achievement</BannerTitle>

            <BannerText>Select an achievement!</BannerText>

            <BannerFooter>No Achievement Selected</BannerFooter>
          </BannerContent>
        </Banner>

        <CowPack>
          <CowPackTitle>Lifetime Gold</CowPackTitle>

          <CowPackContent>
            {Array(10)
              .fill(undefined)
              .map((_, i) => (
                <CowPackIcon key={i} src={cowIcon.toString()} alt="Cow Icon" />
              ))}
          </CowPackContent>
        </CowPack>

        <CowPack>
          <CowPackTitle>Alerts Used</CowPackTitle>

          <CowPackContent>
            {Array(8)
              .fill(undefined)
              .map((_, i) => (
                <CowPackIcon
                  key={i}
                  src={cowIcon.toString()}
                  alt="Cow Icon"
                  disabled={i > 5}
                />
              ))}
          </CowPackContent>
        </CowPack>

        <CowPack>
          <CowPackTitle>Account Age</CowPackTitle>

          <CowPackContent>
            {Array(5)
              .fill(undefined)
              .map((_, i) => (
                <CowPackIcon key={i} src={cowIcon.toString()} alt="Cow Icon" />
              ))}
          </CowPackContent>
        </CowPack>
      </AchievementContainer>

      <NavBar>
        {Array(6)
          .fill(undefined)
          .map((_, i) => (
            <NavButton key={i} disabled={i === 0}>
              ICON
            </NavButton>
          ))}
      </NavBar>
    </Wrapper>
  );
}

export default App;
