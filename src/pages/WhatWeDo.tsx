import { Confirmation } from "../components/UI/Confirmation/index.tsx";
import { EnableGlobal } from "../components/UI/EnableGlobal";
import { FAQ } from "../components/UI/FAQ/index.tsx";
import { Partners } from "../components/UI/Partners/index.tsx";
import { WhatWeDoHero } from "../components/UI/WhatWeDo";
import { WhatWeDoBanner } from "../components/UI/WhatWeDoBanner.tsx";
import { Container } from "../components/shared";

export const WhatWeDo = () => {
  return (
    <>
      <WhatWeDoHero />
      <Container>
        <EnableGlobal />
      </Container>
      <WhatWeDoBanner />
      <Confirmation />
      <FAQ />
      <Partners />
    </>
  );
};
