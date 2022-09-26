// Generated by https://quicktype.io

export interface PlacesResponse {
    type: string;
    query: string[];
    features: Feature[];
    attribution: string;
}

export interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text_es: string;
    language_es?: string;
    place_name_es: string;
    text: string;
    language?: string;
    place_name: string;
    matching_text?: string;
    matching_place_name?: string;
    bbox?: number[];
    center: number[];
    geometry: Geometry;
    context: Context[];
}

export interface Context {
    id: string;
    short_code?: ShortCode;
    wikidata?: string;
    text_es: string;
    language_es?: Language;
    text: string;
    language?: Language;
}

export enum Language {
    Es = "es",
}

export enum ShortCode {
    MX = "mx",
    MXOax = "MX-OAX",
    MXVer = "MX-VER",
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Properties {
    wikidata?: string;
    accuracy?: string;
}
