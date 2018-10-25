var modelData = {"connections_list": [{"src": "disp_comp.disp", "tgt": "compliance_comp.disp"}, {"src": "inputs_comp.force", "tgt": "compliance_comp.forces"}, {"src": "states_comp.states", "tgt": "disp_comp.states"}, {"src": "inputs_comp.dvs", "tgt": "filter_comp.dvs"}, {"src": "compliance_comp.compliance", "tgt": "objective_comp.compliance"}, {"src": "weight_comp.weight", "tgt": "objective_comp.weight"}, {"src": "filter_comp.dvs_bar", "tgt": "penalization_comp.x"}, {"src": "penalization_comp.y", "tgt": "states_comp.multipliers"}, {"src": "inputs_comp.rhs", "tgt": "states_comp.rhs"}, {"src": "filter_comp.dvs_bar", "tgt": "weight_comp.x"}], "tree": {"name": "root", "type": "root", "promotions": {"compliance_comp.compliance": "compliance_comp.compliance", "compliance_comp.disp": "compliance_comp.disp", "compliance_comp.forces": "compliance_comp.forces", "disp_comp.disp": "disp_comp.disp", "disp_comp.states": "disp_comp.states", "filter_comp.dvs": "filter_comp.dvs", "filter_comp.dvs_bar": "filter_comp.dvs_bar", "inputs_comp.dvs": "inputs_comp.dvs", "inputs_comp.force": "inputs_comp.force", "inputs_comp.rhs": "inputs_comp.rhs", "objective_comp.compliance": "objective_comp.compliance", "objective_comp.objective": "objective_comp.objective", "objective_comp.weight": "objective_comp.weight", "penalization_comp.x": "penalization_comp.x", "penalization_comp.y": "penalization_comp.y", "states_comp.multipliers": "states_comp.multipliers", "states_comp.rhs": "states_comp.rhs", "states_comp.states": "states_comp.states", "weight_comp.weight": "weight_comp.weight", "weight_comp.x": "weight_comp.x"}, "subsystem_type": "group", "children": [{"name": "inputs_comp", "type": "subsystem", "subsystem_type": "component", "children": [{"name": "rhs", "type": "unknown", "implicit": false, "dtype": "ndarray"}, {"name": "force", "type": "unknown", "implicit": false, "dtype": "ndarray"}, {"name": "dvs", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "filter_comp", "type": "subsystem", "subsystem_type": "component", "children": [{"name": "dvs", "type": "param", "dtype": "ndarray"}, {"name": "dvs_bar", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "penalization_comp", "type": "subsystem", "subsystem_type": "component", "children": [{"name": "x", "type": "param", "dtype": "ndarray"}, {"name": "y", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "states_comp", "type": "subsystem", "subsystem_type": "component", "children": [{"name": "multipliers", "type": "param", "dtype": "ndarray"}, {"name": "rhs", "type": "param", "dtype": "ndarray"}, {"name": "states", "type": "unknown", "implicit": true, "dtype": "ndarray"}]}, {"name": "disp_comp", "type": "subsystem", "subsystem_type": "component", "children": [{"name": "states", "type": "param", "dtype": "ndarray"}, {"name": "disp", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "compliance_comp", "type": "subsystem", "subsystem_type": "component", "children": [{"name": "disp", "type": "param", "dtype": "ndarray"}, {"name": "forces", "type": "param", "dtype": "ndarray"}, {"name": "compliance", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "weight_comp", "type": "subsystem", "subsystem_type": "component", "children": [{"name": "x", "type": "param", "dtype": "ndarray"}, {"name": "weight", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}, {"name": "objective_comp", "type": "subsystem", "subsystem_type": "component", "children": [{"name": "weight", "type": "param", "dtype": "ndarray"}, {"name": "compliance", "type": "param", "dtype": "ndarray"}, {"name": "objective", "type": "unknown", "implicit": false, "dtype": "ndarray"}]}]}}