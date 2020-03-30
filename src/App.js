import React from 'react';
import { theme, AppHolder, AppHeader, AppTabHolder, AppTab, AppCarousel, AppFooter } from "./theme.grommet";
import BarCharts from "./components/BarCharts";
import MapCharts from "./components/MapCharts";
import PieCharts from "./components/PieCharts";
import { Clock } from "grommet";

const App = () =>
  <AppHolder theme={theme} background="dark-1">
    <AppHeader>
      Charts and map
      <Clock type="digital" />
    </AppHeader>
    <AppTabHolder>
      <AppTab title="Map"><MapCharts /></AppTab>
      <AppTab title="Pie"><PieCharts /></AppTab>
      <AppTab title="Bar"><BarCharts /></AppTab>
      <AppTab title="All">
        <AppCarousel>
          <MapCharts />
          <PieCharts />
          <BarCharts />
        </AppCarousel>
      </AppTab>
    </AppTabHolder>
    <AppFooter> Nivo & Grommet </AppFooter>
  </AppHolder>

export default App;
