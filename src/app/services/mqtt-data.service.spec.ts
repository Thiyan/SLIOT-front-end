import { TestBed } from '@angular/core/testing';

import { MqttDataService } from './mqtt-data.service';

describe('MqttDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MqttDataService = TestBed.get(MqttDataService);
    expect(service).toBeTruthy();
  });
});
