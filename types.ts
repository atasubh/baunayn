import React from 'react';

export enum ModuleType {
  PLANNING = 'PLANNING',
  FIELD = 'FIELD',
  FINANCE = 'FINANCE',
  ADMIN = 'ADMIN',
  LEGAL = 'LEGAL',
  MARKETING = 'MARKETING',
  SALES = 'SALES',
  BROKERS = 'BROKERS',
  MAINTENANCE = 'MAINTENANCE',
  COMMUNITY = 'COMMUNITY',
  AFTERSALES = 'AFTERSALES'
}

export interface KPI {
  label: string;
  value: string;
  trend: number; // positive is good, negative is bad
  trendLabel: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  progress: number;
  status: 'Active' | 'Delayed' | 'Completed';
  wafiLicense: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  module: ModuleType;
}

export interface SalesLead {
  id: string;
  name: string;
  status: 'New' | 'Qualified' | 'Negotiation' | 'Won';
  value: number;
  source: string;
}

// AI Analysis Result Types
export type AIResultType = 'chart' | 'list' | 'stat' | 'alert' | 'text';

export interface AIAnalysisResult {
  type: AIResultType;
  data: any; // Dynamic data based on type
  confidenceScore?: number; // 0-100%
  summary: string;
}

export interface AIFeature {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export interface SubDomain {
  id: string;
  title: string;
  description: string;
  aiFeature: AIFeature;
  aiResult?: AIAnalysisResult; // The simulated output
}

export interface ModuleDetail {
  id: ModuleType;
  title: string;
  description: string;
  subDomains: SubDomain[];
}