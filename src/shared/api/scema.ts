export interface NeoFeedResponse {
  element_count: number;
  links: {
    next: string;
    previous: string;
    self: string;
  };
  near_earth_objects: Record<string, NearEarthObject[]>; // ключ — дата YYYY-MM-DD
}

export interface NearEarthObject {
  id: string;
  neo_reference_id: string;
  name: string;
  name_limited: string;
  orbital_data: OrbitalData;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;

  links: {
    self: string;
  };
  close_approach_data: CloseApproachData[];
}
export interface NearEarthObjectDetail extends NearEarthObject {
  orbital_data: OrbitalData;
  close_approach_data: CloseApproachData[];
}
export interface EstimatedDiameter {
  kilometers: DiameterRange;
  meters: DiameterRange;
  miles: DiameterRange;
  feet: DiameterRange;
}

export interface DiameterRange {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface CloseApproachData {
  close_approach_date: string;
  close_approach_date_full?: string;
  epoch_date_close_approach: number;
  relative_velocity: {
    kilometers_per_second: string;
    kilometers_per_hour: string;
    miles_per_hour: string;
  };
  miss_distance: {
    astronomical: string;
    lunar: string;
    kilometers: string;
    miles: string;
  };
  orbiting_body: string;
}

export interface NeoBrowseResponse {
  links: {
    next?: string;
    self: string;
  };
  page: {
    size: number;
    total_elements: number;
    total_pages: number;
    number: number;
  };
  near_earth_objects: NearEarthObject[];
}
export interface OrbitClass {
  orbit_class_type: string;
  orbit_class_description: string;
  orbit_class_range: string;
}
export interface OrbitalData {
  aphelion_distance: string;
  ascending_node_longitude: string;
  data_arc_in_days: number;
  eccentricity: string;
  epoch_osculation: string;
  equinox: string;

  first_observation_date: string;
  last_observation_date: string;

  inclination: string;
  jupiter_tisserand_invariant: string;
  mean_anomaly: string;
  mean_motion: string;
  minimum_orbit_intersection: string;

  observations_used: number;

  orbit_class: OrbitClass;

  orbit_determination_date: string;
  orbit_id: string;
  orbit_uncertainty: string;

  orbital_period: string;

  perihelion_argument: string;
  perihelion_distance: string;
  perihelion_time: string;

  semi_major_axis: string;
}

export interface NeoBrowseCurrent {
  links: {
    self: string;
  };
  id: string;
  neo_reference_id: string;
  name: string;
  orbital_data: OrbitalData;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  orbitalData: OrbitalData;
  close_approach_data: CloseApproachData[];
}
