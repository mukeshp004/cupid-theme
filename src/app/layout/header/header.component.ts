import { Component, OnInit } from '@angular/core';
import { MessageBusConstant } from './../../shared/constants/message-bus.constant';
import { MessageBusService } from './../../shared/services/message-bus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSidebarCollapsed = false;

  constructor(private messageBus: MessageBusService) {}

  ngOnInit(): void {}

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.messageBus.publish(
      MessageBusConstant.leftSideBarToggle,
      this.isSidebarCollapsed
    );
  }
}
