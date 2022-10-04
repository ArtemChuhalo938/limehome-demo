import React, { FC } from 'react';
import {
  TabBarItemContainerWrapper,
  TabBarItemContentWrapper,
  TabBarItemImageContainerWrapper,
  TabBarItemTextWrapper,
} from './styles';

interface TabBarItemProps {
  title: string;
  icon: any;
  focused: boolean;
}

const TabBarItem: FC<TabBarItemProps> = ({ title, icon, focused }) => (
  <TabBarItemContainerWrapper focused={focused}>
    <TabBarItemContentWrapper>
      <TabBarItemImageContainerWrapper>{icon}</TabBarItemImageContainerWrapper>
      <TabBarItemTextWrapper>{title}</TabBarItemTextWrapper>
    </TabBarItemContentWrapper>
  </TabBarItemContainerWrapper>
);

export default TabBarItem;
