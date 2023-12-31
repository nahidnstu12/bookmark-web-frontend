// ** Types Import

import { Settings } from "../../../context/settingsContext";
// ** Custom Menu Components
import VerticalNavLink from "./VerticalNavLink";
import VerticalNavSectionTitle from "./VerticalNavSectionTitle";
import { NavLink, NavSectionTitle, VerticalNavItemsType } from "../adminTypes";

interface Props {
  settings: Settings;
  navVisible?: boolean;
  groupActive: string[];
  currentActiveGroup: string[];
  verticalNavItems?: VerticalNavItemsType;
  saveSettings: (values: Settings) => void;
  setGroupActive: (value: string[]) => void;
  setCurrentActiveGroup: (item: string[]) => void;
}

const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle;

  return VerticalNavLink;
};

const VerticalNavItems = (props: Props) => {
  // ** Props
  // const { verticalNavItems } = props;
  console.log("props", props);
  const RenderMenuItems = props?.verticalNavItems?.map(
    (item: NavLink | NavSectionTitle, index: number) => {
      const TagName: any = resolveNavItemComponent(item);

      return <TagName {...props} key={index} item={item} />;
    },
  );

  return <>{RenderMenuItems}</>;
};

export default VerticalNavItems;
