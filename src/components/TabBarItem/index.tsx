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
  insets: any;
}

const TabBarItem: FC<TabBarItemProps> = ({ insets, title, icon, focused }) => {
  const { bottom } = insets;

  return (
    <TabBarItemContainerWrapper focused={focused} bottom={bottom}>
      <TabBarItemContentWrapper>
        <TabBarItemImageContainerWrapper>
          {icon}
        </TabBarItemImageContainerWrapper>
        <TabBarItemTextWrapper>{title}</TabBarItemTextWrapper>
      </TabBarItemContentWrapper>
    </TabBarItemContainerWrapper>
  );
};

export default TabBarItem;
