import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProperty = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Property, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nameStreet?: string | null;
  readonly bedsQuantity?: number | null;
  readonly bathroomsQuantity?: number | null;
  readonly dimension?: string | null;
  readonly priceXMonth?: number | null;
  readonly longitud?: string | null;
  readonly latitude?: string | null;
  readonly image?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProperty = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Property, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nameStreet?: string | null;
  readonly bedsQuantity?: number | null;
  readonly bathroomsQuantity?: number | null;
  readonly dimension?: string | null;
  readonly priceXMonth?: number | null;
  readonly longitud?: string | null;
  readonly latitude?: string | null;
  readonly image?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Property = LazyLoading extends LazyLoadingDisabled ? EagerProperty : LazyProperty

export declare const Property: (new (init: ModelInit<Property>) => Property) & {
  copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}