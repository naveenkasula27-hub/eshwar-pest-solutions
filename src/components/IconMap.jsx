import {
  Bug, Zap, Rat, BedDouble, Wind, Hammer, ShieldCheck, Home, Building2,
  Briefcase, UtensilsCrossed, HeartPulse, GraduationCap, Warehouse, Factory,
  ShoppingBag, Snowflake, HardHat, Trees, Leaf, Search, Clock, FileCheck,
  Users, Workflow,
} from "lucide-react";

const map = {
  Bug, Zap, Rat, BedDouble, Wind, Hammer, ShieldCheck, Home, Building2,
  Briefcase, UtensilsCrossed, HeartPulse, GraduationCap, Warehouse, Factory,
  ShoppingBag, Snowflake, HardHat, Trees, Leaf, Search, Clock, FileCheck,
  Users, Workflow,
};

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Bug;
  return <Cmp {...props} />;
}
