import * as azdata from 'azdata';

azdata.dataprotocol.registerConnectionProvider({
    providerId: 'MyProvider',
    connect(connectionUri: string, connectionInfo: azdata.ConnectionInfo): Thenable<boolean> { return Promise.resolve(true); },
    disconnect(connectionUri: string): Thenable<boolean> { return Promise.resolve(true); },
    cancelConnect(connectionUri: string): Thenable<boolean> { return Promise.resolve(true); },
    listDatabases(connectionUri: string): Thenable<azdata.ListDatabasesResult> { return Promise.resolve({ databaseNames: [] }); },
    changeDatabase(connectionUri: string, newDatabase: string): Thenable<boolean> { return Promise.resolve(true); },
    rebuildIntelliSenseCache(connectionUri: string): Thenable<void> { return Promise.resolve(); },
    getConnectionString(connectionUri: string, includePassword: boolean): Thenable<string> { return Promise.resolve(''); },
    buildConnectionInfo(connectionString: string): Thenable<azdata.ConnectionInfo> { return Promise.resolve({ options: {} }); },
    registerOnConnectionComplete(handler: (connSummary: azdata.ConnectionInfoSummary) => any): void { },
    registerOnIntelliSenseCacheComplete(handler: (connectionUri: string) => any): void { },
    registerOnConnectionChanged(handler: (changedConnInfo: azdata.ChangedConnectionInfo) => any): void { }
});

const test: azdata.ContainerBuilder<azdata.InputBoxComponent, any, any, azdata.InputBoxProperties> = {
    component: () => <any> {},
    withItems: (component: azdata.Component[]) => { throw new Error('Not implemented'); },
    withLayout: (layout: any) => { throw new Error('Not implemented'); },
    withProperties: (properties: azdata.InputBoxProperties) => { throw new Error('Not implemented'); },
    withValidation: (validation: (component: azdata.InputBoxComponent) => boolean | Thenable<boolean>) => { throw new Error('Not implemented'); }
};
test.component();
