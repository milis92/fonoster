/**
 * @fileoverview gRPC-Web generated client stub for fonoster.applications.v1beta2
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: applications.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as applications_pb from './applications_pb'; // proto import: "applications.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class ApplicationsClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateApplication = new grpcWeb.MethodDescriptor(
    '/fonoster.applications.v1beta2.Applications/CreateApplication',
    grpcWeb.MethodType.UNARY,
    applications_pb.CreateApplicationRequest,
    applications_pb.CreateApplicationResponse,
    (request: applications_pb.CreateApplicationRequest) => {
      return request.serializeBinary();
    },
    applications_pb.CreateApplicationResponse.deserializeBinary
  );

  createApplication(
    request: applications_pb.CreateApplicationRequest,
    metadata?: grpcWeb.Metadata | null): Promise<applications_pb.CreateApplicationResponse>;

  createApplication(
    request: applications_pb.CreateApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: applications_pb.CreateApplicationResponse) => void): grpcWeb.ClientReadableStream<applications_pb.CreateApplicationResponse>;

  createApplication(
    request: applications_pb.CreateApplicationRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: applications_pb.CreateApplicationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.applications.v1beta2.Applications/CreateApplication',
        request,
        metadata || {},
        this.methodDescriptorCreateApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.applications.v1beta2.Applications/CreateApplication',
    request,
    metadata || {},
    this.methodDescriptorCreateApplication);
  }

  methodDescriptorGetApplication = new grpcWeb.MethodDescriptor(
    '/fonoster.applications.v1beta2.Applications/GetApplication',
    grpcWeb.MethodType.UNARY,
    applications_pb.GetApplicationRequest,
    applications_pb.Application,
    (request: applications_pb.GetApplicationRequest) => {
      return request.serializeBinary();
    },
    applications_pb.Application.deserializeBinary
  );

  getApplication(
    request: applications_pb.GetApplicationRequest,
    metadata?: grpcWeb.Metadata | null): Promise<applications_pb.Application>;

  getApplication(
    request: applications_pb.GetApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: applications_pb.Application) => void): grpcWeb.ClientReadableStream<applications_pb.Application>;

  getApplication(
    request: applications_pb.GetApplicationRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: applications_pb.Application) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.applications.v1beta2.Applications/GetApplication',
        request,
        metadata || {},
        this.methodDescriptorGetApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.applications.v1beta2.Applications/GetApplication',
    request,
    metadata || {},
    this.methodDescriptorGetApplication);
  }

  methodDescriptorListApplications = new grpcWeb.MethodDescriptor(
    '/fonoster.applications.v1beta2.Applications/ListApplications',
    grpcWeb.MethodType.UNARY,
    applications_pb.ListApplicationsRequest,
    applications_pb.ListApplicationsResponse,
    (request: applications_pb.ListApplicationsRequest) => {
      return request.serializeBinary();
    },
    applications_pb.ListApplicationsResponse.deserializeBinary
  );

  listApplications(
    request: applications_pb.ListApplicationsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<applications_pb.ListApplicationsResponse>;

  listApplications(
    request: applications_pb.ListApplicationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: applications_pb.ListApplicationsResponse) => void): grpcWeb.ClientReadableStream<applications_pb.ListApplicationsResponse>;

  listApplications(
    request: applications_pb.ListApplicationsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: applications_pb.ListApplicationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.applications.v1beta2.Applications/ListApplications',
        request,
        metadata || {},
        this.methodDescriptorListApplications,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.applications.v1beta2.Applications/ListApplications',
    request,
    metadata || {},
    this.methodDescriptorListApplications);
  }

  methodDescriptorUpdateApplication = new grpcWeb.MethodDescriptor(
    '/fonoster.applications.v1beta2.Applications/UpdateApplication',
    grpcWeb.MethodType.UNARY,
    applications_pb.UpdateApplicationRequest,
    applications_pb.UpdateApplicationResponse,
    (request: applications_pb.UpdateApplicationRequest) => {
      return request.serializeBinary();
    },
    applications_pb.UpdateApplicationResponse.deserializeBinary
  );

  updateApplication(
    request: applications_pb.UpdateApplicationRequest,
    metadata?: grpcWeb.Metadata | null): Promise<applications_pb.UpdateApplicationResponse>;

  updateApplication(
    request: applications_pb.UpdateApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: applications_pb.UpdateApplicationResponse) => void): grpcWeb.ClientReadableStream<applications_pb.UpdateApplicationResponse>;

  updateApplication(
    request: applications_pb.UpdateApplicationRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: applications_pb.UpdateApplicationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.applications.v1beta2.Applications/UpdateApplication',
        request,
        metadata || {},
        this.methodDescriptorUpdateApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.applications.v1beta2.Applications/UpdateApplication',
    request,
    metadata || {},
    this.methodDescriptorUpdateApplication);
  }

  methodDescriptorDeleteApplication = new grpcWeb.MethodDescriptor(
    '/fonoster.applications.v1beta2.Applications/DeleteApplication',
    grpcWeb.MethodType.UNARY,
    applications_pb.DeleteApplicationRequest,
    applications_pb.DeleteApplicationResponse,
    (request: applications_pb.DeleteApplicationRequest) => {
      return request.serializeBinary();
    },
    applications_pb.DeleteApplicationResponse.deserializeBinary
  );

  deleteApplication(
    request: applications_pb.DeleteApplicationRequest,
    metadata?: grpcWeb.Metadata | null): Promise<applications_pb.DeleteApplicationResponse>;

  deleteApplication(
    request: applications_pb.DeleteApplicationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: applications_pb.DeleteApplicationResponse) => void): grpcWeb.ClientReadableStream<applications_pb.DeleteApplicationResponse>;

  deleteApplication(
    request: applications_pb.DeleteApplicationRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: applications_pb.DeleteApplicationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.applications.v1beta2.Applications/DeleteApplication',
        request,
        metadata || {},
        this.methodDescriptorDeleteApplication,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.applications.v1beta2.Applications/DeleteApplication',
    request,
    metadata || {},
    this.methodDescriptorDeleteApplication);
  }

  methodDescriptorEvaluateIntelligence = new grpcWeb.MethodDescriptor(
    '/fonoster.applications.v1beta2.Applications/EvaluateIntelligence',
    grpcWeb.MethodType.UNARY,
    applications_pb.EvaluateIntelligenceRequest,
    applications_pb.EvaluateIntelligenceResponse,
    (request: applications_pb.EvaluateIntelligenceRequest) => {
      return request.serializeBinary();
    },
    applications_pb.EvaluateIntelligenceResponse.deserializeBinary
  );

  evaluateIntelligence(
    request: applications_pb.EvaluateIntelligenceRequest,
    metadata?: grpcWeb.Metadata | null): Promise<applications_pb.EvaluateIntelligenceResponse>;

  evaluateIntelligence(
    request: applications_pb.EvaluateIntelligenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: applications_pb.EvaluateIntelligenceResponse) => void): grpcWeb.ClientReadableStream<applications_pb.EvaluateIntelligenceResponse>;

  evaluateIntelligence(
    request: applications_pb.EvaluateIntelligenceRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: applications_pb.EvaluateIntelligenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.applications.v1beta2.Applications/EvaluateIntelligence',
        request,
        metadata || {},
        this.methodDescriptorEvaluateIntelligence,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.applications.v1beta2.Applications/EvaluateIntelligence',
    request,
    metadata || {},
    this.methodDescriptorEvaluateIntelligence);
  }

  methodDescriptorCreateTestToken = new grpcWeb.MethodDescriptor(
    '/fonoster.applications.v1beta2.Applications/CreateTestToken',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    applications_pb.TestTokenResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    applications_pb.TestTokenResponse.deserializeBinary
  );

  createTestToken(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<applications_pb.TestTokenResponse>;

  createTestToken(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: applications_pb.TestTokenResponse) => void): grpcWeb.ClientReadableStream<applications_pb.TestTokenResponse>;

  createTestToken(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: applications_pb.TestTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/fonoster.applications.v1beta2.Applications/CreateTestToken',
        request,
        metadata || {},
        this.methodDescriptorCreateTestToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/fonoster.applications.v1beta2.Applications/CreateTestToken',
    request,
    metadata || {},
    this.methodDescriptorCreateTestToken);
  }

}

