import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications = signal<{message: string; type: 'success' | 'error' | 'warning' | 'info'}[]>([]);

  show(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'success') {
    this.notifications.update((prev) => [...prev, {message, type}]);
    setTimeout(() => this.remove(message), 3000); // Auto-remove após 3s
  }

  remove(message: string) {
    this.notifications.update((prev) => prev.filter((n) => n.message !== message));
  }
}
