import { TestBed, inject } from '@angular/core/testing';

import { SocketChatService } from './socket-chat.service';

describe('SocketChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketChatService]
    });
  });

  it('should be created', inject([SocketChatService], (service: SocketChatService) => {
    expect(service).toBeTruthy();
  }));
});
